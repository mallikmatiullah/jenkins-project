pipeline {
    agent any

    environment {
        DOCKER_REPO = 'malikmatiullah/demo-app'
    }

    stages {
        stage('Build image') {
            steps {
                script {
                    // Building Docker image from the Dockerfile in your GitHub repository
                    sh 'docker build -t $DOCKER_REPO:${BUILD_NUMBER} https://github.com/mallikmatiullah/jenkins-project.git'
                    // Displaying Docker images
                    sh 'docker images'
                }
            }
        }

        stage('Push Docker hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: '12', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    script {
                        // Logging in to Docker Hub and pushing the image
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                        sh "docker push $DOCKER_REPO:${BUILD_NUMBER}"
                    }
                }
            }
        }

        stage('Deploy locally') {
            steps {
                script {
                    // Running Docker image locally
                    sh "docker run -d -p 80:80 $DOCKER_REPO:${BUILD_NUMBER}"
                }
            }
        }
    }

    post {
        always {
            // Cleaning up Docker images after execution
            sh 'docker image prune -a --force'
        }
    }
}
