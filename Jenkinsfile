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
				sh "tar -pczf JS.tar.gz ./*"
	
				}
			}
		}
	post{
		success{
			echo "Post Stage"
			archiveArtifacts artifacts: 'JS.tar.gz', onlyIfSuccessful:true
		}
	}
}	


