pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh """
                npm install
                npm run test
                """
            }
        }
    }
}


