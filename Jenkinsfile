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
                docker build -t reace-hot-cold:latest -f ./build/Dockerfile .
                '''
            }
        }

        stage('Test') {
            steps {
                echo "Testing"
                sh '''
                docker build - t react-hot-cold:latest -f ./test/Dockerfile
                '''
            }
        }
    }

}