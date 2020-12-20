pipeline {
    agent any

    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
            }
    stages {
        stage('Performance Testing') {
            steps {
                sh 'k6 login cloud --token ${K6_API_TOKEN}'
                sh 'k6 run k6-test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}
