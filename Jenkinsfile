pipeline {

agent {
    kubernetes {
    label 'jenkins-slave-jnlp'
    }
    }


    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
