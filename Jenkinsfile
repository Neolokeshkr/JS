pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"	
			}
			
			script {
				TAG = VersionNumber(versionNumberString: '${BUILD_DATE_FORMATTED, "yyyyMMdd"}-develop-${BUILDS_TODAY}')
			}
		}

	}
}
