pipeline {

    agent any

    stages {

        stage("build") {
            steps {
                    sh 'docker ps'
            }
        }
        stage("test") {
            steps {
                echo "testing step"
            }
        }
        stage("deploy") {
            steps {
                echo "deploying steps"
            }
        }
    }
    }




