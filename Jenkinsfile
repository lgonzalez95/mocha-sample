pipeline {
    agent any
    stages {
        stage("build") {
            stages {
                stage("Start pipeline ") {
                    steps {
                        input("Do you want to start?")
                    }
                }
                stage("Execute install") {
                    steps {
                        sh "npm install"
                    }
                }
            }
            post {
                    always {
                        echo "This run always after execute"
                    }
            }
        }
        stage("test") {
            steps {
                sh "npm run test"
            }
        }
    }
    post {
            failure {
                echo "A step failed"
            }
            success {
                echo "No steps faile"
            }
            always {
                echo "I alwyas run"
            }
    }
}