from playwright.sync_api import sync_playwright
import os

# Pages to capture
pages = [
    ('http://localhost:3000', '.minimize-ui/after/home.png'),
    ('http://localhost:3000/about', '.minimize-ui/after/about.png'),
    ('http://localhost:3000/articles', '.minimize-ui/after/articles.png'),
    ('http://localhost:3000/projects', '.minimize-ui/after/projects.png'),
    ('http://localhost:3000/ai', '.minimize-ui/after/ai.png'),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 720})

    for url, screenshot_path in pages:
        print(f"Capturing {url}...")
        page.goto(url)
        page.wait_for_load_state('networkidle')
        page.wait_for_timeout(1000)  # Extra wait for animations

        # Take full page screenshot
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"✓ Saved to {screenshot_path}")

    browser.close()

print("\nAll screenshots captured successfully!")
