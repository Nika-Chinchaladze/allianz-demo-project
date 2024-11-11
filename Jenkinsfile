pipeline {
    agent any
    environment {
        CI = 'true'
        MY_USER_NAME = credentials('user-name')
        MY_PASS_WORD = credentials('user-password')
        DEV_BASE_URL = credentials('user-base-url')
        API_BASE_URL = credentials('user-api-url')
        POLICY_ID = credentials('user-policy-id')
        ENV = 'dev'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run E2E Tests') {
            steps {
                bat 'npx playwright test --reporter=html'
            }
            post {
                always {
                    archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
                }
            }
        }
    }
}