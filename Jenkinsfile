pipeline {

agent any


    stages {
        stage('Build') {
            steps {
                sh "apt-get install -y npm"
                sh 'npm install'
            }
        }
    }
}
