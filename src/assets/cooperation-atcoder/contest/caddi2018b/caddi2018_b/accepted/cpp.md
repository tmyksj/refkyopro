# CADDi 2018 for Beginners
## D - Harlequin
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;

    bool r = false;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        r = r || a % 2 != 0;
    }

    cout << (r ? "first" : "second") << endl;
}
```
