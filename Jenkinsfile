pipeline {
    agent any

    stages {
        stage('Buvejuma-izveide') {
            steps {
                script{
                    build
                }
        }

        stage('Bvejuma-izvietosana-dev-vide') {
            steps {
                script{
                    deploy("DEV")
                }
            }
        }

        stage('Testu-izpilde-dev-vide') {
            steps {
                script{
                    test("DEV")
                }
            }
        }

        stage('Bvejuma-izvietosana-stg-vide') {
            steps {
                script{
                    deploy("STG")
                }
            }
        }

        stage('Testu-izpilde-stg-vide') {
            steps {
                script{
                    test("STG")
                }
            }
        }

        stage('Bvejuma-izvietosana-prd-vide') {
            steps {
                script{
                    deploy("PRD")
                }
            }
        }

        stage('Testu-izpilde-prd-vide') {
            steps {
               script{
                    test("PRD")
                }
            }
        }
    }
}

def deploy(String enviroment){
    echo "Deployment to ${enviroment} started.."
}

def test(String enviroment){
    echo "Testing to ${enviroment} started.."
}

def build(){
    echo "Building to enviroment started.."
    }