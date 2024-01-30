![image](https://github.com/abhi-bhatra/learn-gpt/assets/63901956/51570d76-34ff-4588-9bb1-04a5f3460186)

Azure had simply been a great cloud provider, in terms of, services, innovation, security and transparency. Azure had offered a great AI Suite, which is now offering Generative AI solutions. With that said, it had now become very easy to create and train your own customised GPT with your own custom hyper parameters tuned in your way.

1. Creating .env file. Store secrets we saved above in following variables:
 - AZURE_OPENAI_KEY=ca5cxxx01bf6d343xxxxxxx
 - AZURE_OPENAI_ENDPOINT=https://openai-xxxx/
 - PORT=3005
 - DEPLOYMENT_NAME=openai-model-demo

2. Create index.ts file for application server:
 - https://gist.github.com/abhi-bhatra/7c8f3c97fe88e8ed43a9426c6cf1a7cc

3. Here, I have created two routes, as one could be the welcome/landing page that you can customise to make it more beautiful and the other route will be the POST route on which request will be made.

4. Now, let’s write an application logic in other file called, openai.ts :
 - https://gist.github.com/abhi-bhatra/2bf909f1df5e8667fd8b10053c845a38

5. Let us understand above code:
    a. Importing Azure SDK client
    b. Creating a function called completion, this function we will be exporting in index file.
    c. Initialise the API client using Azure OpenAI key and endpoint.
    d. Now, let’s use getChatCompletion method from Azure OpenAI sdk, this method is used to initialize how GPT model should behave on base of prompt.
    e. Learn more about how-to-write prompts at: https://github.com/abhi-bhatra/generative-ai-for-beginners/tree/main/04-prompt-engineering-fundamentals#complex-prompt
    f. Currently, the prompt is fixed, as for demo purpose: What is Kubernets ?
