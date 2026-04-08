from fastapi import FastAPI, Request, Form
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import uvicorn
import time

app = FastAPI(title="Ethershield API")
templates = Jinja2Templates(directory="templates")

@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/scan")
async def scan_target(request: Request, target_url: str = Form(None)):
    if not target_url:
        return templates.TemplateResponse("partials/result.html", {
            "request": request, 
            "error": "Please enter a URL."
        })

    time.sleep(1.5)

    is_safe = True
    if "phishing" in target_url.lower() or "malware" in target_url.lower():
        is_safe = False

    return templates.TemplateResponse("partials/result.html", {
        "request": request,
        "is_safe": is_safe,
        "target": target_url
    })

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)