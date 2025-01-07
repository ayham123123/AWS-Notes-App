// S3 configuration 
const S3_CONFIG = {
    REGION: prompt("Enter your S3 region (e.g., us-east-1):"),
    BUCKET_NAME: prompt("Enter your S3 bucket name:"),
    ACCESS_KEY: prompt("Enter your AWS Access Key:"),
    SECRET_KEY: prompt("Enter your AWS Secret Key:")
};

// Initializing AWS SDK
AWS.config.update({
    region: S3_CONFIG.REGION,
    accessKeyId: S3_CONFIG.ACCESS_KEY,
    secretAccessKey: S3_CONFIG.SECRET_KEY
});

const s3 = new AWS.S3();

// Uploading a file to S3
function uploadNoteToS3(note) {
    const params = {
        Bucket: S3_CONFIG.BUCKET_NAME,
        Key: `notes/${note.subject || "Untitled"}.txt`,
        Body: JSON.stringify(note),
        ContentType: "application/json"
    };

    s3.upload(params, function (err, data) {
        if (err) {
            console.error("Error uploading note:", err.message);
            alert("Unable to upload note to S3.");
        } else {
            console.log("Note uploaded successfully:", data);
            alert("Note uploaded to S3 successfully!");
        }
    });
}
