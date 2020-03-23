import sys
sys.path.append('../utilities/')
from bs4 import BeautifulSoup
from app.utilities.constants import Constants as K

class Commands:

    @staticmethod
    def handleCommand(to_number, from_number, command):
        print(f"Command: {command}")
        if command == K.cmds['commands']['cmd']:
            print(K.cmds['commands']['desc'])
        else:
            print(f"{command} is not a valid command.")
