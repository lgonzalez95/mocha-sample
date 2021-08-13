pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                sh "npm run install"
            }
        }
        stage("test") {
            steps {
                sh "npm run test"
            }
        }
    }
}