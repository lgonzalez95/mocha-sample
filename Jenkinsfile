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
                    node -v
                """
                echo 'Test was successful'
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
