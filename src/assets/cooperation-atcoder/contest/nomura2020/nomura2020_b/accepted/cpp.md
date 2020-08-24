# NOMURA プログラミングコンテスト 2020
## B - Postdocs
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string t;
    cin >> t;

    for (int i = 0; i < static_cast<int>(t.size()); i++) {
        cout << (t[i] == 'P' ? 'P' : 'D');
    }
    cout << endl;
}
```
