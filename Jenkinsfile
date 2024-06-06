pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
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
        stage('Publish') {
            steps {
                echo 'Publishing'
                sh '''
                TIMESTAMP=$(date +%Y%m%d%H%M%S)
                tar -czf artifact_$TIMESTAMP.tar.gz log_build.txt log_test.txt artefakty

                echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
                NUMBER='''+ env.BUILD_NUMBER +'''
                docker tag react-hot-cold-deploy:latest kmaku4/react-hot-cold:latest
                docker push kmaku4/react-hot-cold:latest
                docker logout
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
