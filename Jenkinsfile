pipeline{
	agent any
	stages {
		stage('Build'){
			steps {
				sh "node --version"
				echo "Build Stage"
				
				sh "ls"
				script
				{
					tag = VersionNumber projectStartDate: '2020-11-06', versionNumberString: '1.0.0-${BUILDS_ALL_TIME}', versionPrefix: 'V'
				}
				sh "tar -czf JS-${tag}.tar.gz --exclude=*.js *.*"
				sh "pwd"
				sh "ls"	
			}
		}
		
		stage('Tagging'){
			steps{
				echo "Tagging"
				echo "Version : ${tag}"
			}
		}
	}
	
	post{
		success{
			echo "Post Stage"
			archiveArtifacts artifacts: 'JS-${tag}.tar.gz', onlyIfSuccessful:true, followSymlinks: false
		}
	}
}	


