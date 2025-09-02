This document explains how user-generated files (such as PDFs, screenshots, and other runtime outputs) are stored in Eagle 3D Streaming and how they are managed and deleted over time.

Where Files Are Stored
======================

Files are stored in **two main locations**:

1.  **Streaming Machine (where the Unreal app is running)**
    
    *   Files generated or uploaded during runtime (e.g., screenshots, PDFs) are stored in the same machine that runs your Unreal application.
        
2.  **Cloud Storage**
    
    *   Files may also be uploaded to our cloud storage.
        
    *   These files are only accessible **programmatically** (via APIs) and cannot be accessed manually.
        

File Deletion Policy
====================

### Cloud Storage

*   Files stored in cloud storage are **automatically deleted after 7 days**.
    
*   Access to these files is programmatic only, no manual browsing is allowed.  
      
    

### Streaming Machine

*   Files stored in the streaming machine are cleaned up **periodically** when:
    
    *   A **new version of your app** is uploaded.
        
    *   The system performs a scheduled cleanup.
        
*   This cleanup does **not always happen immediately** and is triggered periodically.
    
*   **Important:** If files are not saved inside your **app directory**, our system will not delete them.
    

File Management Recommendations
===============================

*   **Save inside the app directory**: Ensure files are written within your app directory so they are automatically included in cleanup operations.
    
*   **Overwriting files**: You can safely overwrite an existing file by saving a new file with the same name. The older file will be replaced.
    
*   **Avoid storing outside the app directory**: Files saved elsewhere will persist and may need manual removal.
    

* * *

### Need help?

🛠️ Contact our [**Support Team**](https://eagle3dstreaming.atlassian.net/servicedesk/customer/portals)

💬 Join the [**Community on Discord**](https://discord.gg/GRXD29Ah42)

🆓 [**Get Started for free**](https://controlpanel.eagle3dstreaming.com/signup)

Follow us on:

[**Facebook**](https://www.facebook.com/Eagle3DStreaming/) | [**GitHub**](https://github.com/e3ds) | [**LinkedIn**](https://www.linkedin.com/company/eagle-3d-streaming) | [**YouTube**](https://www.youtube.com/@eagle3dstreaming)