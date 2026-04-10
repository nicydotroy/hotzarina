import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html') and not f.startswith('google')]

whatsapp_button = '''
        <!-- WhatsApp Button -->
        <a href="https://wa.me/919038976363" class="floating-btn whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 9038976363">
            <span class="floating-btn-label">WhatsApp Chat</span>
            <svg viewBox="0 0 32 32" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M16 0C7.164 0 0 7.163 0 16c0 2.8.729 5.53 2.118 7.933L0 32l8.241-2.072A15.938 15.938 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm9.484 22.394c-.393 1.105-1.946 2.03-3.18 2.295-.848.176-1.954.318-5.674-1.217-4.766-1.967-7.839-6.783-8.077-7.093-.233-.31-1.917-2.55-1.917-4.865 0-2.315 1.215-3.453 1.646-3.923.43-.47.942-.589 1.255-.589.314 0 .627.006.902.017.289.012.676-.11 1.057.807.393.944 1.337 3.26 1.453 3.495.116.235.194.509.039.82-.155.311-.232.505-.465.778-.232.273-.488.61-.698.819-.232.233-.474.483-.204.95.27.467 1.201 1.98 2.578 3.206 1.773 1.578 3.267 2.067 3.729 2.301.462.235.733.196 1.003-.117.27-.313 1.16-1.353 1.469-1.817.31-.465.62-.388.99-.233.371.155 2.353 1.11 2.757 1.312.404.203.674.31.772.466.097.155.097.892-.296 1.997z"/>
            </svg>
        </a>
        '''

for html_file in html_files:
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if WhatsApp floating button already exists
        if 'class="floating-btn whatsapp-btn"' in content:
            print(f"Skip (already has floating WhatsApp): {html_file}")
            continue
        
        # Find the Telegram button and add WhatsApp before it
        pattern = r'(\s*<!-- Telegram Button -->)'
        replacement = whatsapp_button + r'\1'
        
        new_content = re.sub(pattern, replacement, content, count=1)
        
        if new_content != content:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✓ Added: {html_file}")
        else:
            print(f"✗ Pattern not found: {html_file}")
    except Exception as e:
        print(f"Error in {html_file}: {e}")

print("\nDone!")
