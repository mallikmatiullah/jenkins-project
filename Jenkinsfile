pipeline {

    agent any

    stages {

        stage("build docker image") {
            steps {
                    // Clone the repository
        sh 'git clone https://github.com/mallikmatiullah/jenkins-project.git'
        
        // Change directory into the cloned repository
        dir('jenkins-project') {
            // Build the Docker image
            sh 'docker build -t demo-testing:${BUILD_ID} .'
        }
        
        // Optional: List Docker images after build
        sh 'docker images | grep demo-testing'
        echo "build successfully"
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




