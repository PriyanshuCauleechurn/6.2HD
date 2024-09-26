pipeline {
    agent any

    stages {

        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm run build
                    ls -la
                '''
            }
        }

        stage('Tests') {
            parallel {
                stage('Unit tests') {
                    agent {
                        docker {
                            image 'node:18-alpine'
                            reuseNode true
                        }
                    }

                    steps {
                        sh '''
                            #test -f build/index.html
                            npm test
                        '''
                    }
                    post {
                        always {
                            junit 'test-results/junit.xml'
                        }
                    }
                }

                
            }
        }

        stage('Deploy') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-u 1000:1000'  // Use a non-root user
                    reuseNode true
                }
            }
            steps {
                sh '''
                    sudo npm install netlify-cli
                    node_modules/.bin/netlify --version
                '''
            }
        }
    }
}
