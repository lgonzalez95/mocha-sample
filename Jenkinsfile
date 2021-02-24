pipeline {
    agent any
    stages {
        stage('Node Version 14') {
            agent {
                docker { 
                    image 'node:14' 
                    }
            }
            environment {
                HOME = '.'
            }
            steps {
                sh """
                    npm install
                    npm run test
                """
            }
        }
    }
    post {
        failure {
            echo 'Failed'
        }
        success {
            echo 'Success'
        }
        always {
            echo 'I alwasy run'
        }
    }
}
