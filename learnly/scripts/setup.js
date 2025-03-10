const fs = require('fs');
const path = require('path');

function ensureTempDirectory() {
  try {
    // Create temp directory if it doesn't exist
    const tempDir = path.join(process.cwd(), 'temp');
    
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true, mode: 0o777 });
      console.log('Created temp directory for code execution');
    } else {
      // Ensure proper permissions on existing directory
      fs.chmodSync(tempDir, 0o777);
      console.log('Verified temp directory permissions');
    }

    // Clean up old files
    const files = fs.readdirSync(tempDir);
    for (const file of files) {
      fs.unlinkSync(path.join(tempDir, file));
    }
    console.log('Cleaned up old temporary files');

    // Add .gitignore if it doesn't exist
    const gitignorePath = path.join(process.cwd(), '.gitignore');
    const gitignoreContent = fs.existsSync(gitignorePath)
      ? fs.readFileSync(gitignorePath, 'utf8')
      : '';

    if (!gitignoreContent.includes('temp/')) {
      fs.appendFileSync(gitignorePath, '\n# Temporary files\ntemp/\n');
      console.log('Added temp directory to .gitignore');
    }
  } catch (error) {
    console.error('Error setting up temp directory:', error);
    process.exit(1);
  }
}

ensureTempDirectory(); 