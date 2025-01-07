# AWS-Notes-App
AWS cloud based notes app using S3 to store data, program is made with HTML, CSS, and JavaScript
## How to Use Your Own AWS S3 Configuration
Steps:
1. Log in to your AWS Management Console.
2. Create an S3 bucket (if you don’t already have one).
3. Go to **IAM** and create a new user with programmatic access.
4. Attach the "AmazonS3FullAccess" policy (or configure the policy as needed).
5. Note the **Access Key ID** and **Secret Access Key** provided.
6. When running the app, you will be prompted to enter:
   - AWS Region (e.g., `us-east-1`)
   - S3 Bucket Name
   - Access Key ID
   - Secret Access Key
