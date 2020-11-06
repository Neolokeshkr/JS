pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"
				script
				{
					tag = VersionNumber projectStartDate: '2020-11-06', versionNumberString: '1.0.0-${BUILDS_ALL_TIME}', versionPrefix: 'V'
				}
				sh "tar -pczf JS.tar.gz ./*"
			}
		}
		
		stage('Tagging'){
			steps{
				echo "Tagging"
			}
		}
	}
	
	post{
		success{
			echo "Post Stage"
			archiveArtifacts artifacts: 'JS.tar.gz', onlyIfSuccessful:true, followSymlinks: false
		}
	}
}	


