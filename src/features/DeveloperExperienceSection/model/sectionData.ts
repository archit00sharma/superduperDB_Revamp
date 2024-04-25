/* eslint-disable prettier/prettier */
export const textBlocks = [
  {
    title: 'Work natively in Python',
    text: 'Apply AI with just a few simple commands, no MLOps experience required',
  },
  {
    title: 'Integration with ML/ AI frameworks and APIs',
    text: 'Native support of PyTorch, Sklearn and HuggingFace models as well as models externally hosted behind public APIs.',
  },
  {
    title: 'Complementary to the existing ecosystem',
    text: 'Based around flexible notions of data types, data stores, data retrieval and AI models, SuperDuperDB is super-easy to extend and customize.',
  },
];

export const codeCards = [
  `#first code card
In [1]: from superduperdb import superduper 
   ...: from superduperdb.mongodb import Collection 
   ...: import pymongo 

In [2]: my_db = superduper(pymongo.MongoClient().my_db) 

In [3]: r = my_db.execute(Collection('docs').find_one())

`,
  `#second code card
from superduperdb.ext.torch import TorchModel
from superduperdb.ext.transformers import TransformersModel
from superduperdb.ext.sklearn import SklearnModel
from superduperdb.ext.openai import OpenAIEmbedding
  
m1 = TorchModel('m1', object=MyTorchModule, preprocess=p1)
m2 = TransformersModel('m2', object=MyTorchModule, preprocess=p2)
m3 = SklearnModel('m3', object=MyTorchModule, preprocess=p3)
m4 = OpneAIEmbedding('m4', preprocess=p4)
`,
  `#third code card
from superduperdb.ext.pillow import pil_image
from superduperdb.ext.torch import Tensor
  
db.execute(collection.insert_one({
    'y': pil_image(y),
    'x': Tensor(x, shape=x.shape)
})
`,
];
