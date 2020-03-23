import sys
sys.path.append('../utilities/')
from bs4 import BeautifulSoup
from app.utilities.constants import constants

class Commands:

    @staticmethod
    def handleCommand(to_number, from_number, command):
        if command == constants.cmds.commands.cmd:
            print(constants.cmds.commands.desc)
        else:
            print(f"{command} is not a valid command.")
