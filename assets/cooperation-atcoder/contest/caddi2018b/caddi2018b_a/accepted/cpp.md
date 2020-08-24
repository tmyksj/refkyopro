# CADDi 2018 for Beginners
## A - 12/22
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    string n;
    cin >> n;

    map<char, int> m;
    for (int i = 0; i < static_cast<int>(n.size()); i++) {
        m[n[i]]++;
    }

    cout << m['2'] << endl;
}
```
