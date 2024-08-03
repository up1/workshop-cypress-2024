pipeline {
    agent {
        label 'docker01'
    }
    stages {
        stage('Get code') {
            steps {
                checkout scm
            }
        }
        
        stage('UI testing') {
            steps {
                sh 'docker compose up testing --abort-on-container-exit --build'
            }
        }
    }

    post {
        always {
            junit stdioRetention: '', testResults: 'reports/*.xml'
            sh 'docker compose down'
            sh 'docker volume prune -f'
        }
    }
}