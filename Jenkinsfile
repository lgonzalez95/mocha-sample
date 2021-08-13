pipeline {
    agent any
    environment {
        DISABLE_AUTH = 'true'
    }
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
        stage("groovy") {
            steps {
                script {
                    try {
                        def var
                        var = env.DISABLE_AUTH
                        if (var == 'true'){
                            echo 'Yeah it was true'
                        }
                    catch (ex) {
                        echo 'Something wrong happened'
                        echo 'Something ${ex}'
                    }
                }
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