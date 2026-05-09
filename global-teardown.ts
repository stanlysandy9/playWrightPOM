import fs from 'fs';

 async function globalTeardown() {
    console.log('Running global teardown')
    if (fs.existsSync('./LoginAuth.json')){

        fs.unlinkSync('./LoginAuth.json');
        
    }
    console.log('Login session is cleared successfully');
}export default globalTeardown;
