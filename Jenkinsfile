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
                docker build -t react-hot-cold:latest -f ./building/Dockerfile .
                docker run --name build_container react-hot-cold:latest
                docker cp build_container:/react-hot-cold/build ./artefakty
                docker logs build_container > log_build.txt
                '''
            }
        }

        stage('Test') {
            steps {
                echo "Testing"
                sh '''
                docker build -t react-hot-cold-test:latest -f ./test/Dockerfile .
                docker run --name test_container react-hot-cold-test:latest
                docker logs test_container > log_test.txt
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploy"
                sh '''
                    docker build -t react-hot-cold-deploy:latest -f ./deploy/Dockerfile .
                    docker run -p 3000:3000 -d --rm --name deploy_container react-hot-cold-deploy:latest
                '''
            }
        }
    }
    post{
        always{
            echo "Archiving artifacts"

            archiveArtifacts artifacts: 'artifact_*.tar.gz', fingerprint: true
            sh '''
            chmod +x cleanup.sh
            ./cleanup.sh
            '''
        }
    }
}
