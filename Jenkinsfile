
pipeline {
    agent any

    stages {

        stage('Build Backend') {
            steps {
                dir('backend/TaskManagement') {
                    bat 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend/taskmanagementfrontend') {
                    bat 'npm ci'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker build -t taskmanagement-backend:latest -f backend/TaskManagement/Dockerfile backend/TaskManagement'
                bat 'docker build -t taskmanagement-frontend:latest -f frontend/taskmanagementfrontend/Dockerfile frontend/taskmanagementfrontend'
            }
        }

        stage('Deploy Application') {
            steps {
                echo 'Deployment stage will be configured with database credentials.'
            }
        }
    }

    post {
        success {
            echo 'TaskManagement pipeline completed successfully!'
        }

        failure {
            echo 'TaskManagement pipeline failed. Check the console output.'
        }
    }
}

