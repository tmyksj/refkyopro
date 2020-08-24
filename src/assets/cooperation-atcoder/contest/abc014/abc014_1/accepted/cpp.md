# AtCoder Beginner Contest 014
## A - けんしょう先生のお菓子配り
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (b - (a % b)) % b << endl;
}
```
