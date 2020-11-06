pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"
				script
				{
					tag = VersionNumber projectStartDate: '2020-11-06', versionNumberString: 'BUILD_DAY', versionPrefix: 'V', worstResultForIncrement: 'SUCCESS'
				}
				sh "tar -pczf JS.tar.gz ./*"
				}
			}
		}
		stage('Tagging'){
			steps{
	
			}
		}
	
	post{
		success{
			echo "Post Stage"
			archiveArtifacts artifacts: 'JS.tar.gz', onlyIfSuccessful:true
		}
	}
}	


