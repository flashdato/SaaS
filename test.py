import pyautogui
import time 

time.sleep(2)
# Move the mouse to the desired position
print("Move your mouse to the target area...")
pyautogui.pause = True

x, y = pyautogui.position()
print("Coordinates:", x, y)


time.sleep(0.5)
