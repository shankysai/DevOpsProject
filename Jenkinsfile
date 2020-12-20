pipeline {
    agent any

    environment {
        K6_API_TOKEN=credentials("k6_api_token")
            }
    stages {
        stage('Performance Testing') {
            steps {
                sh 'k6 login cloud --token ${api_token}'
                sh 'k6 DevOpsProject/k6-test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}
