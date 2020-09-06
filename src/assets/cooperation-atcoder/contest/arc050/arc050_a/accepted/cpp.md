# AtCoder Regular Contest 050
## A - 大文字と小文字
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    string a, b;
    cin >> a >> b;
    cout << (a[0] - 'A' == b[0] - 'a' ? "Yes" : "No") << endl;
}
```
