/*******************************************************************************
 *   (c) 2023 unipackage
 *
 *  Licensed under either the MIT License (the "MIT License") or the Apache License, Version 2.0
 *  (the "Apache License"). You may not use this file except in compliance with one of these
 *  licenses. You may obtain a copy of the MIT License at
 *
 *      https://opensource.org/licenses/MIT
 *
 *  Or the Apache License, Version 2.0 at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the MIT License or the Apache License for the specific language governing permissions and
 *  limitations under the respective licenses.
 ********************************************************************************/

import {
    MessageMongoDatastore,
    BlockMongoDatastore,
    TipsetMongoDatastore,
} from "../../../../src/chain/repo/datastore"

export const messageDs = new MessageMongoDatastore(
    "mongodb://127.0.0.1:27017/datastore"
)
export const blockDs = new BlockMongoDatastore(
    "mongodb://127.0.0.1:27017/datastore"
)
export const tipsetDs = new TipsetMongoDatastore(
    "mongodb://127.0.0.1:27017/datastore"
)

export const messageAuthDs = new MessageMongoDatastore(
    "mongodb://127.0.0.1:27018/datastoreAuth",
    {
        user: "admin",
        pass: "password",
        dbName: "datastoreAuth",
        authSource: "admin",
        authMechanism: "SCRAM-SHA-256",
        tlsAllowInvalidCertificates: true,
        tlsAllowInvalidHostnames: true,
    }
)
