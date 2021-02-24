pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }

    stages {
        stage('Node Version 14') {
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
