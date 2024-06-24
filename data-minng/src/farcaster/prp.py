import random
import json
import pandas as pd


# List of nodes with volume
nodes = [
    {"id": "base", "volume": 10000.0},
    {"id": "frenpetonbase", "volume": 10000.0},
    {"id": "builderfi", "volume": 10000.0},
    {"id": "TalentProtocol", "volume": 10000.0},
    {"id": "AerodromeFi", "volume": 10000.0},
    {"id": "backedfi", "volume": 10000.0},
    {"id": "echelonfnd", "volume": 10000.0},
    {"id": "degentokenbase", "volume": 10000.0},
    {"id": "cartesiproject", "volume": 10000.0},
    {"id": "Tea", "volume": 162.0},
    {"id": "ibc.fun", "volume": 115.0},
    {"id": "OpenCover", "volume": 115.0},
    {"id": "TIME Token Finance", "volume": 132.0},
    {"id": "Seamless", "volume": 246.0},
    {"id": "Amet Finance", "volume": 154.0},
    {"id": "Astaria", "volume": 185.0},
    {"id": "LayerZero", "volume": 585.0},
    {"id": "InterSwap", "volume": 145.0},
    {"id": "Payflow", "volume": 154.0},
    {"id": "DAOSquare", "volume": 111.0},
    {"id": "FortyTwo", "volume": 114.0},
    {"id": "UCF Finance", "volume": 75.0},
    {"id": "Plena - Crypto Super App", "volume": 173.0},
    {"id": "Sparkfi", "volume": 99.0},
    {"id": "Rubic", "volume": 155.0},
    {"id": "Kook", "volume": 89.0},
    {"id": "ZeroDev", "volume": 146.0},
    {"id": "Onthis", "volume": 174.0},
    {"id": "Flooz", "volume": 189.0},
    {"id": "Notum", "volume": 279.0},
    {"id": "Loopcrypto", "volume": 81.0},
    {"id": "PoolTogether", "volume": 74.0},
    {"id": "Mozaic Finance", "volume": 141.0},
    {"id": "Bebop", "volume": 242.0},
    {"id": "Swoop Exchange", "volume": 122.0},
    {"id": "BAS3D", "volume": 95.0},
    {"id": "Satellite", "volume": 88.0},
    {"id": "Pancake Swap", "volume": 161.0},
    {"id": "PWNDAO", "volume": 92.0},
    {"id": "ODOS protocol", "volume": 110.0},
    {"id": "Mellow Protocol", "volume": 99.0},
    {"id": "Moonwell", "volume": 152.0},
    {"id": "Beam", "volume": 165.0},
    {"id": "Symbiosis", "volume": 105.0},
    {"id": "Peanut Protocol", "volume": 72.0},
    {"id": "CoinBrain", "volume": 76.0},
    {"id": "Jumper Exchange", "volume": 730.0},
    {"id": "Mes Protocol", "volume": 1727.0},
    {"id": "Portals.fi", "volume": 75.0},
    {"id": "Squid", "volume": 54.0},
    {"id": "Safe", "volume": 51.0},
    {"id": "Orbiter Finance", "volume": 73.0},
    {"id": "aave", "volume": 39.0},
    {"id": "Compound", "volume": 29.0},
    {"id": "Volmex Finance", "volume": 21.0},
    {"id": "TimeSwap", "volume": 31.0},
    {"id": "Gauntlet Network", "volume": 23.0},
    {"id": "Matcha", "volume": 48.0},
    {"id": "Zapper", "volume": 52.0},
    {"id": "stargate", "volume": 40.0},
    {"id": "curve", "volume": 39.0},
    {"id": "Via Protocol", "volume": 20.0},
    {"id": "0x", "volume": 27.0},
    {"id": "Pods", "volume": 16.0},
    {"id": "Zerion", "volume": 64.0},
    {"id": "Uniswap", "volume": 54.0},
    {"id": "Balancer", "volume": 25.0},
    {"id": "Beefy Finance", "volume": 22.0},
    {"id": "Izumi Finance", "volume": 33.0},
    {"id": "QiDao", "volume": 22.0},
    {"id": "Synapse Bridge", "volume": 26.0},
    {"id": "Harvest", "volume": 14.0},
    {"id": "Sablier", "volume": 15.0},
    {"id": "OpenOcean", "volume": 31.0},
    {"id": "deBridge", "volume": 18.0},
    {"id": "Kyber Network", "volume": 24.0},
    {"id": "Slingshot", "volume": 20.0},
    {"id": "DODO", "volume": 27.0},
    {"id": "sushiswap", "volume": 33.0},
    {"id": "Mean Finance", "volume": 19.0}
]

# Calculate the probability of each node being a hub based on volume
total_volume = sum(node['volume'] for node in nodes)
for node in nodes:
    node['probability'] = node['volume'] / total_volume

# Create edges with probabilities
edges = []
probability_threshold = 0.05  # Adjust this value to control edge density

for node in nodes:
    for other_node in nodes:
        if node['id'] != other_node['id']:
            probability = (node['probability'] + other_node['probability']) / 2
            if random.random() < probability_threshold + probability:
                edge = {
                    "from": node['id'],
                    "to": other_node['id'],
                    "width": probability
                }
                edges.append(edge)

edges_df = pd.DataFrame(edges)
# print(edges_df.head(10))


json_array = []
for index, row in edges_df.iterrows():
    json_entry = {
        "from": row["from"],
        "to": row["to"],
        "width": row["width"]
    }
    json_array.append(json_entry)

json_output = json.dumps(json_array, indent=2)
print(json_output)