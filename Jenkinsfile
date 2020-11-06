pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"
				script
				{
					tag = VersionNumber (versionNumberString: '${BUILD_DAY,XX}-develop')
				}
				sh "tar -cpfz JS.tar.gz ./*"
	
				}
			}
		}

	}


