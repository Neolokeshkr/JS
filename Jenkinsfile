pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"
				tag = VersionNumber (versionNumberString: '${BUILD_DAY}-develop-${BUILDS_TODAY}')

	
				}
			}
		}

	}


