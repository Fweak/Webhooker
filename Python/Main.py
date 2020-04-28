import requests

class Webhook:
    def __init__(self, channelID: str(), token: str()):
        self.channel = channelID
        self.token = token
        self.api = f'https://discordapp.com/api/webhooks/{self.channel}/{self.token}'
        self.request = requests.Session()

    def info(self):
        _res = self.request.get(self.api)

        if _res.status_code in [200, 204]:
            return _res.json()
        else:
            return "Not A Valid Webhook"
        
    def edit(self, update = { 'name': str(), 'avatar': str() }):
        _res = self.request.patch(self.api, json=update, headers={'content-type': 'application/json'})

        if _res.status_code in [200, 204]:
            return True
        else:
            return False
    
    def delete(self):
        _res = self.request.delete(self.api)

        if _res.status_code in [200, 204]:
            return True
        else:
            return False

    def send(self, options = { 'content': str(), 'avatar': str() }):
        params = {
            'content': options.get('content')
        }

        if options.get('embed'):
            embed = options.get('embed')
            embed['color'] = 0x36393F
            params['embeds'] = [embed]
        
        self.request.post(self.api, json=params, headers={'content-type': 'application/json'})
        
        return True
