import pyautogui
import time 

time.sleep(2)

# Simulate pressing two keys simultaneously
key1 = "ctrl"
key2 = "t"

pyautogui.keyDown(key1)
pyautogui.keyDown(key2)

# Release the keys
pyautogui.keyUp(key1)
pyautogui.keyUp(key2)

x = 670
y = 510

# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(0.5)
# Type the message in the search bar

message = "rs ge"
pyautogui.typewrite(message)

pyautogui.press("enter")
time.sleep(1)
# Perform a mouse click
pyautogui.click()

x = 390 
y = 400

# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 1780 
y = 160

# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(2)

x = 610
y = 500


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(2)

x = 335
y = 175


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 490
y = 925


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 180
y = 275


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 1800
y = 280


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 1860
y = 370


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 1860
y = 500


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

x = 1860
y = 450


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)

pyautogui.click()
time.sleep(1)

x = 1270
y = 995


# Move the mouse to the target position
pyautogui.moveTo(x, y)

# Perform a mouse click
pyautogui.click()
time.sleep(1)