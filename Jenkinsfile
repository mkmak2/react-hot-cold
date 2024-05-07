pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Pull'){
            steps{
                echo "Pulling"
                git branch: 'main', url: 'https://github.com/mkmak2/react-hot-cold'
            }
        }

        stage('Build') {
            steps {
                echo "Building"
                sh '''
                docker build -t reace-hot-cold:latest -f ./building/Dockerfile .
                '''
            }
        }

        stage('Test') {
            steps {
                echo "Testing"
                sh '''
                docker build -t react-hot-cold:latest -f ./test/Dockerfile
                '''
            }
        }

        stage("Deploy") {
              steps {
                  echo "Deploy"
                  sh '''
                  
                  docker compose up
                  docker compose logs building > log_build.txt
                  docker compose logs test > log_test.txt

                  '''
              }
        }

        stage("Production") {
            steps {
                echo "Production"
                sh '''
                
                TIMESTAMP=$(date +%Y%m%d%H%M%S)
                tar -czf artifact_$TIMESTAMP.tar.gz log_build.txt log_test.txt

                docker compose down

                '''
            }
        }
    }
    post{
        always{
            echo "Archiving"
            archiveArtifacts artifacts: 'artifact_*.tar.gz', fingerprint: true
        }
    }
}
