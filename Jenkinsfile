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

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh "npm run build"

            }
        }
        stage("Build Container"){
        steps {
        container('docker') {
        sh "docker build -t roohoo/roohoodev-default:0.0.1 ."

        }
        }
        }

    }
}
