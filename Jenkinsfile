pipeline {

//agent any
    agent {
        kubernetes {
            //cloud 'kubernetes'
            label 'docker'
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: jnlp
    image: roohoo/jenkins-jnlp-slave:0.0.5
    tty: true
  - name: docker
    image: docker
    command: ['cat']
    tty: true
    volumeMounts:
    - name: dockersock
      mountPath: /var/run/docker.sock

  volumes:
  - name: dockersock
    hostPath:
      path: /var/run/docker.sock
"""
        }
    }

    environment {
        KUBECONFIG = credentials('kubeconfig-file')
    }


    stages {
//        stage("Deploy"){
//            steps {
//                container("kubectl"){
//                    sh "kubectl --kubeconfig $KUBECONFIG apply -f k8s/deployment.yaml"
//                }
//                //kubernetesDeploy configs: '**/k8s/*.yaml', kubeconfigId: 'kubeconfig-master'
//            }
//        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh "npm run build"

            }
        }
        stage("Build Container") {
            steps {
                container('docker') {
                    //sh "docker build -t roohoo/roohoodev-default:0.0.1 ."
                    //sh "docker push roohoo/roohoodev-default:0.0.1"
                    script {
                        def image = docker.build("roohoo/roohoodev-default:0.0.2")
                        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                            image.push()
                            image.push("latest")
                        }


                    }
                }
            }
        }

    }
}
